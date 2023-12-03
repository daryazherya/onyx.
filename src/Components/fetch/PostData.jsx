async function PostData(api, formData) {
    return await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
}

export default PostData;
