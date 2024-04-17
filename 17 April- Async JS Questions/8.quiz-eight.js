const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id:1,
                username: "prathamesh karatkar"
            })
        },2000)
    })
}

const getPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["post1", "post2", "post3"])
        },20000)

        setTimeout(() =>{
            resolve("API Timeout")
        },10000 )
    })
}

const displayUserInfo = async() => {
    const user = await getUser();
    const posts = await getPosts();
    return {user, posts}
}

displayUserInfo().then((result) => console.log(result))