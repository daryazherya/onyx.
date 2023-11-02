
const PostForm = (api, formData) => {

    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    })
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        
};

export default PostForm;
