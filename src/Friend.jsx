export default function Friend ({friend}) {
    
    const {name, email} = friend

    return (
        <div>
            <h1>Name: {name}</h1>
            <h4>Email: {email}</h4>
        </div>
    )
}