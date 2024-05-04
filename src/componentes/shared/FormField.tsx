import { forwardRef } from "react";
import { IFormProps } from "../../utils/interfaces";


const FormField:React.FC<IFormProps> = forwardRef(({ className, label, ...props }, ref) => {
    return (
      <div className={(className)}>
        <label>
          <span>{label}</span>
          <input autoComplete="off" {...props} ref={ref}/>
        </label>
      </div>
    );
  });
  
  export default FormField;