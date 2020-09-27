const { Schema } = require('mongoose');

const LinkSchema = new Schema({
    name: {
        type: String,
        required: 'Name can\'t be empty',
    }, 
    url: {
        type: String,
        required: 'URL can\'t be empty',
    }
})
LinkSchema.path('url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const CommentSchema = new Schema({
    body: {
        type: String, 
        required: "Comment Body can't be empty"
    },
    date: {
        type: Date, 
        required: "Date when Comment was made is needed"
    }
})

const ApplicationSchema = new Schema({
    title: {
        type: String, 
        required: "Title can't be empty"
    }, 
    company: String, 
    description: String, 
    links: [LinkSchema],
    comments = [CommentSchema],
    stage: {
        type: String, 
        enum: [
            'saved',
            'applied',
            'challenge',
            'interview',
            'offer',
            'rejected'
        ],
        required: "Stage can't be empty"
    }
});

module.exports = ApplicationSchema;