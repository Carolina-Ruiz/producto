var createStore = () => {
	var data = {};
  
  return {
  	set: function (key, value)
    {
    	data[key] = value;
      return value;
    },
    get: function (key)
    {
    	return data[key];
    },
    keys: function()
    {
      return Object.keys(data);
    },
    clear: function()
    {
      return data = {};
    }
  };
}

var store = createStore();

store.set('estrella', '*');
console.log(store.get('estrella'));  // *