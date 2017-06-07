/**
 * Created by willo on 3/11/17.
 */
var MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect( "mongodb://localhost:27017/youtubeChannel", function( err, db ) {
            _db = db;
            return callback( err );
        } );
    },

    getDb: function() {
        return _db;
    }
};
/**
 * DB structure:
 * example of popularMMO
 * collection:
 *  playlist:[{channelID:"popularMMO"}], videos:[{playlistID:<playListID from youtube>},{}]
 * example of newChannel
 * collection:
 * playlist:[{channelID:"popularMMO"}], videos:[{playlistID:<playListID from youtube>},{}]
 */