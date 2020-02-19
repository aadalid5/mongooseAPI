const MovieModel = require("../models/movie.model");

const read = async (req,res) =>{
    //res.json("inside moviecontroller");
    try{
        const movies = await MovieModel.find({});
        res.json(movies);
    }
    catch(err) { res.json({message:err})} 
};


const create = async (req, res) => {
    const {title, year, ranking} = req.body;
    try{
        const movie = new MovieModel({
            title:title,
            year:year,
            ranking:ranking
        });
    
        const movieSaved = await movie.save()
        res.json(movieSaved);
    }
    catch(err) { res.json({message:err})}    
};


const view = async (req,res) =>{
    try{
        const id = req.params.movieID;
        //const movie = await MovieModel.findById(id);
        const movie = await MovieModel.findOne({_id:id});  //same above
        
        res.json(movie);
    }
    catch(err) { res.json({message:err})} 
};

const update = async (req,res) =>{
    try{
        const id = req.params.movieID;
        //const updatedMovie = await MovieModel.findByIdAndUpdate(id, {$set:req.body});
        const updateInfo = await MovieModel.updateOne({_id:id},{$set:req.body});  // same above but result query is diferent
        
        //res.json(updatedMovie);
        res.json(updateInfo);
    }
    catch(err) { res.json({message:err})} 
};

const remove = async (req, res)=>{
    try{
        const id = req.params.movieID;
        //const deletedMovie = await MovieModel.findByIdAndRemove(id);
        //const deletedMovie = await MovieModel.findByIdAndDelete(id);
        const deleteInfo = await MovieModel.deleteOne({_id:id});

        //res.json(deletedMovie);
        res.json(deleteInfo);
    }
    catch(err) { res.json({message:err})} 
};




//(prueba-> varios parametros en un request)
const viewparams = async (req, res)=>{
    
    try{
        const {movieID, year} = req.params;        

        console.log(movieID);
        console.log(year); 

        res.json({message:"two params readed"});
    }
    catch(err) { res.json({message:err})} 
};


module.exports = {
    read,
    create,
    view,
    update,
    remove,
    viewparams
};
