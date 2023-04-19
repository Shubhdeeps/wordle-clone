import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Dish } from "../../types/Dish";
import { useState } from "react";
import ProductDialog from "../models/CartModel";

export default function SpecialCard({ data }: { data: Dish }) {
  const [model, setModal] = useState<Dish | null>(null);

  return (
    <>
      {!!model && (
        <ProductDialog
          open={model !== null}
          onClose={() => setModal(null)}
          product={model}
        />
      )}
      <div className="special-card" onClick={() => setModal(data)}>
        <img src={data.img} className="special-card_img" />
        <Box
          sx={{
            mt: "80px",
            px: 1,
            //   border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "120px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              {data.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "16px",
                color: "grey.600",
              }}
            >
              {data.description}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "20px",
            }}
          >
            {data.cost}
          </Typography>
        </Box>
      </div>
    </>
  );
}
