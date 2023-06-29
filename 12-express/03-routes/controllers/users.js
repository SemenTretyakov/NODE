const getUsersHandler = (req, res) => {
    res.send('Get comment route');
};

const postUsersHandler = (req, res) => {
    res.send('Post user route');
};

const getSingleUserHandler = (req, res) => {
    res.send(`Post user route. UserId ${req.params.userId}`);
};

module.exports = {
    getUsersHandler,
    postUsersHandler,
    getSingleUserHandler,
};
