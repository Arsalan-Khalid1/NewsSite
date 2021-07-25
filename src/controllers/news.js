const axios = require('axios');

const renderNews = async(req, res) => {
    try {
        const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
        res.render('news', {articles: newsApi.data})
    } catch (error) {
        if(error.response)
        {
            res.render('news', {articles: null});
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.message);
        }
        else if(error.request)
        {
            res.render('news', {articles: null});
            console.log(error.request);
        }
        else
        {
            res.render('news', {articles: null});
            console.error("Error : ", error.message);
        }
    }
};
const renderSlug = async(req, res) => {
    let id = req.params.id;
    try {
        const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${id}`);
        res.render('newsSingle', {article: newsApi.data})
    } catch (error) {
        if(error.response)
        {
            res.render('news', {article: null});
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.message);
        }
        else if(error.request)
        {
            res.render('newsSingle', {article: null});
            console.log(error.request);
        }
        else
        {
            res.render('newsSinle', {article: null});
            console.error("Error : ", error.message);
        }
    }
};

const searchPost = async(req, res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch', { articles : newsAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
};

module.exports = {renderNews, renderSlug, searchPost};