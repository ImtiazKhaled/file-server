const initState = {
    currDir: [],
    dirs: [],
    files: [],
}

const RootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGED_DIR_FORWARD':
            var currFiles = []
            var currDirs = []
            const url_items = action.dir.split('/')
            
            fetch('http://localhost:8080/')
            .then(response => {
                return response.json()
            })
            .then( result => {
                currFiles = result.files === undefined ? [] : result.files 
                currDirs = result.dirs === undefined ? [] : result.dirs
                console.log(currDirs)
                console.log(currFiles)
                console.log(url_items)
                return state = {
                    ...state,
                    currDir: url_items,
                    dirs: currDirs,
                    files: currFiles
                }
            })
            .catch(error => {
                console.log(error)
            })
            
            return state
        default:
            return state
    }
}

export default RootReducer