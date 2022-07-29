function Input({ placeholder }) {
    return (
        <div className="input-element">
            <input type="text" className="auth-input" />
            <label>{placeholder}</label>
        </div>
    );
}

export default Input;