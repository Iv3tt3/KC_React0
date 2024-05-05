import { useRef, useState } from "react";
import Layout from "../../componentes/layout/Layout";
import Button from "../../componentes/shared/Button";
import FormField from "../../componentes/shared/FormField";
import { postAdvert } from "./service";
import { ErrorResponse, useNavigate } from "react-router-dom";


export function NewAdvert() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        sale: true
    })

    const {name, price, sale} = formData

    const tags = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'];

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const fileInputRef = useRef(null);

    const [isFetching, setIsFetching] = useState(false)

    const [error, setError] = useState<ErrorResponse | null>(null)


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setIsFetching(true)
            await postAdvert({
                name, 
                price, 
                sale, 
                tags: selectedTags.join(), 
                photo: fileInputRef.current.files[0]
            });
            setIsFetching(false)
            navigate('/');
        }catch(error){
            setIsFetching(true)
            setError(error as ErrorResponse)
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setFormData(currentData => ({
            ...currentData,
            [event.target.name]: (event.target.name === 'sale' ? event.target.id === 'sell' : event.target.value), 
        }));
    }

    const handleCheckChange = (tag) => {
        if (selectedTags.includes(tag)){
            setSelectedTags (prevTags => prevTags.filter(prevTag => prevTag !== tag))
        }else{
            setSelectedTags (prevTags => [...prevTags, tag])
        }
    };

    const resetError = () => {
        setError(null)
        setIsFetching(false)
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <FormField
                    type="text"
                    name="name"
                    label="Ad name"
                    className="newAdvert-name"
                    value={name}
                    onChange={handleChange}

                />

                <FormField
                    type="number"
                    name="price"
                    label="Ad price"
                    className="newAdvert-price"
                    value={price}
                    onChange={handleChange}
                    step="0.01"
                />

                <FormField
                    type="file"
                    name="img"
                    label=""
                    className="newAdvert-photo"
                    accept="image/png, image/jpeg"
                    ref={fileInputRef}
                />

                    Select type:
                    <div>
                        <label> 
                        To Sell
                        <input type="radio" id="sell" name="sale" value={sale}
                        onChange={handleChange} required></input>
                        </label>
                    </div>
                    <div>
                        <label> 
                        To Buy
                        <input type="radio" id="buy" name="sale" value={sale}
                        onChange={handleChange}></input>
                        </label>
                    </div>
                
                

                <div>
                    {tags.map((tag) => (
                        <label key={tag}>
                        <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleCheckChange(tag)}
                        />
                        {tag}
                        </label>
                    ))}
                </div>

                <Button type="submit" disabled={!name || !price || selectedTags.length === 0 || isFetching}>Publish new ad</Button>
            </form>
            <div onClick={resetError}>{error ? error.statusText : null}</div>
        </Layout>
    );
}