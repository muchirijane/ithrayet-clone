

export const TagsBuilder = (tags) =>{
    let tag_names = [];
    let tag_colors = [];

    tags.map((val,key)=>{
        tag_names.push(val.name);
        tag_colors.push(val.color);
    });

    return {
        tagNames: tag_names.join(", "),
        tagColors: tag_colors.join(", ")
    }
}