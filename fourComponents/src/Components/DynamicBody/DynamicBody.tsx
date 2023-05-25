function DynamicBody() {
    const para = "Test Para"
    if (para) return <p>{para}</p>;
    return <p>Default Para</p>
}

export default DynamicBody;