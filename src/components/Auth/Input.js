function Input({ placeholder, type }) {
    return (
        <div className="input-element">
            <input type={type || "text"} className="auth-input" placeholder=" " />
            <label>{placeholder}</label>
        </div>
    );
}

export default Input;