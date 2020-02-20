const initState = {
    currDir: [],
    dirs: [],
    files: [],
}

const request_url = 'http://34.68.138.86/:8080/'

const RootReducer = async(state = initState, action) => {
    switch(action.type) {
        case 'CHANGED_DIR_FORWARD': {
            var currFiles = []
            var currDirs = []
            const url_items = action.dir.split('/')
            const body = {
                type: 'GET_DATA',
                url: action.dir
            }
            const json = await fetch(request_url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)    
            })
            .then(response => {
                return response.json()
            })  
            
            currFiles = json.files === undefined ? [] : json.files 
            currDirs = json.dirs === undefined ? [] : json.dirs
            
            return state = {
                ...state,
                currDir: url_items,
                dirs: currDirs,
                files: currFiles
            }    
        }
        case 'GET_FILE': {
            const bodyFile = {
                type: 'GET_FILE',
                url: action.dir,
                filename: action.filename
            }
            
            await fetch(request_url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyFile)    
            })
            .then(response => {
                response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = action.filename;
					a.click();
				});
            })  
            return state
        }
        default:
            return state
    }
}

export default RootReducer