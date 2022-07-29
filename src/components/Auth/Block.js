function Block({ children, type }) {
    return (
        <div id="auth-block" style={
            type === 'register' ? {
                height: "39em"
            } : {
                height: "28em"
            }
        }>
            <div id="auth-inner" style={
            type === 'register' ? {
                height: "39em"
            } : {
                height: "28em"
            }
        }>
                {children}
            </div>
        </div>
    );    
}

export default Block;