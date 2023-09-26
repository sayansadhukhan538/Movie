const useGenres = (selectGenres)=>{
    if(selectGenres<1){
        return '';
    }
    else{
        const GenresID = selectGenres.map((genre)=>genre);
        return GenresID.reduce((accu, curr)=>accu+','+curr);
    }
}
export default useGenres;