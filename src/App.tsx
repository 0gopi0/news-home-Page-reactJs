import { AppBar, Box, Button, Grid, Stack } from "@mui/material";
import ToolBar from "./ToolBar";
import heroImage1 from "./assets/images/image-web-3-desktop.jpg";
import heroImage2 from "./assets/images/image-web-3-mobile.jpg";
import retroPc from "./assets/images/image-retro-pcs.jpg";
import topLaptops from "./assets/images/image-top-laptops.jpg";
import growthOfGamin from "./assets/images/image-gaming-growth.jpg";
function App() {
  return (
    <>
      <header>
        <nav>
          <AppBar sx={{ backgroundColor: "white" }}>
            <ToolBar />
          </AppBar>
        </nav>
      </header>
      <main className="mx-7 mt-16">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack>
              <Box display={{ xs: "none", md: "block" }}>
                <img
                  src={heroImage1}
                  className="object-cover rounded-sm"
                  alt="main image"
                />
              </Box>
              <Box display={{ xs: "block", md: "none" }}>
                <img
                  src={heroImage2}
                  className="object-cover rounded-sm"
                  alt="main image"
                />
              </Box>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{ marginTop: "30px", gap: "30px" }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    fontSize: { xs: "40px", md: "60px" },
                    fontWeight: "600",
                    lineHeight: "1.1",
                  }}
                >
                  <h1>The Bright Future of Web 3.0?</h1>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <p className="mb-4">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      ":hover": {
                        backgroundColor: "rgb(20 83 45)",
                        color: "white",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                color: "white",
                backgroundColor: "black",
                padding: "50px 30px",
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                borderRadius: "4px",
              }}
            >
              <h2 className="text-3xl font-bold text-amber-500">New</h2>
              <Box>
                <h3 className="text-m font-semibold">
                  Hydrogen VS Electric Cars
                </h3>
                <p className="text-xs mt-1">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </Box>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "white",
                  height: 0.5,
                  borderColor: "white",
                }}
              />
              <Box>
                <h3 className="text-m font-semibold">
                  The Downsides of AI Artistry
                </h3>
                <p className="text-xs mt-1">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </Box>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "white",
                  height: 0.5,
                  borderColor: "white",
                }}
              />
              <Box>
                <h3 className="text-m font-semibold">
                  Is VC Funding Drying Up?
                </h3>
                <p className="text-xs mt-1">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </main>
      <footer>
        <Grid container spacing={2} sx={{ margin: "20px 0" }}>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex" }}>
            <img
              src={retroPc}
              alt="retro pc"
              className="w-20 object-cover h-24 rounded-sm mr-2"
            />
            <Box>
              <h4 className="font-bold text-amber-500 text-lg">01</h4>
              <h5 className="font-semibold">Reviving Retro PCs</h5>
              <p className="text-sm">
                What happens when old PCs are given modern upgrades?
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex" }}>
            <img
              src={topLaptops}
              alt="top laotps"
              className="w-20 object-cover h-24 rounded-sm mr-2"
            />
            <Box>
              <h4 className="font-bold text-amber-500 text-lg">02</h4>
              <h5 className="font-semibold">Top 10 Laptops of 2022</h5>
              <p className="text-sm">
                Our best picks for various needs and budgets
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex" }}>
            <img
              src={growthOfGamin}
              alt="growth of gaming"
              className="w-20 object-cover h-24 rounded-sm mr-2"
            />
            <Box>
              <h4 className="font-bold text-amber-500 text-lg">03</h4>
              <h5 className="font-semibold">The Growth of Gaming</h5>
              <p className="text-sm">
                How the pandemic has sparked fresh opportunities
              </p>
            </Box>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default App;
