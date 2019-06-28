var Archive = (function () {
    function Archive(id, name, shortLocation, date, time, fullLocation, description, images, speakers) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.shortLocation = shortLocation;
        this.fullLocation = fullLocation;
        this.description = description;
        this.images = images;
        this.speakers = speakers;
    }
    return Archive;
})();
exports.Archive = Archive;
//# sourceMappingURL=archive.model.js.map