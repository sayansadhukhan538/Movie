const useGenres = (selectGenres)=>{
    if(selectGenres>1){
        const GenresID = selectGenres.map((genre)=>genre);
        return GenresID.reduce((accu, curr)=>accu+','+curr);
    }
}
export default useGenres;
