import { useRef, useState } from "react";
import Layout from "../../componentes/layout/Layout";
import Button from "../../componentes/shared/Button";
import FormField from "../../componentes/shared/FormField";


export function NewAdvert() {

    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        sale: '',
    })

    const {name, price, sale} = formData

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log([name, price, (sale === 'sell'),selectedTags, fileInputRef.current.files[0] ])

    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => ({
            ...currentData,
            [event.target.name]: event.target.value, 
        }));
    }

    const tags = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'];

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleCheckChange = (tag) => {
      setSelectedTags (prevTags => [...prevTags, tag])
    };

    const fileInputRef = useRef(null);

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

                <label>
                    Select type:
                    <select 
                    name="sale"
                    value={sale}
                    onChange={handleChange}
                    >
                    <option value="sell">To Sell</option>
                    <option value="buy">To Buy</option>
                    </select>
                </label>
                

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

                <Button type="submit">Publish new ad</Button>
          </form>
        </Layout>
    );
}