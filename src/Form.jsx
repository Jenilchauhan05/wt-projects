function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
}

export default function Form() {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter something" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}