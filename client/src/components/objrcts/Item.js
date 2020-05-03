import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ButtonBase from "@material-ui/core/ButtonBase";
import staticUrl from "../../utils/static";

const Item = ({ data, onLike, userId }) => (
  <Box p={1.5} clone display="flex" flexDirection="column">
    <Paper>
      <Box mb={1.5}>
        <Typography variant="body1" align="center">
          {data.name}
        </Typography>
      </Box>
      <Box
        height="200px"
        owerflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {data.images.length > 0 ? (
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%"
            }}
            src={staticUrl(`obj/${data.id}/${data.images[0].id}/320.jpg`)}
          />
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            bgcolor="#fafafa"
          >
            <Typography variant="body1" color="textSecondary">
              No image available
            </Typography>
          </Box>
        )}
      </Box>
      <Box pt={1.5} display="flex" justifyContent="center" alignItems="center">
        <ButtonBase onClick={onLike}>
          {data.likes.some(v => v.userId === userId) ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon color="disabled" />
          )}
          <Box pl={0.5} clone>
            <Typography variant="body1" color="textSecondary">
              {data.likes.length}
            </Typography>
          </Box>
        </ButtonBase>
      </Box>
    </Paper>
  </Box>
);

export default Item;
