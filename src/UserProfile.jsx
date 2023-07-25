function UserProfile (user) {
    return (
        <>
            <div>
                <img src={user.imgUrl} />
                <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                 </div>
            </div>
        </> 
    );
}

export default UserProfile;