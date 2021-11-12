import { Paper, Box, Grid, Typography, Link } from "@material-ui/core";
import * as React from "react";

interface TestDocumentProps {}

export default function TestDocument(props: TestDocumentProps) {
  return (
    <Paper style={{ margin: 20, padding: 20 }}>
      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
        Header
      </Typography>
      <Typography component="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis, tellus ac pretium euismod, orci mauris fermentum
        purus, vel tempus neque felis in enim. Nullam lacus purus, dignissim ut mauris et, vulputate viverra dui. Proin et arcu id nisl
        porta vehicula luctus sit amet risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec imperdiet ante, vel bibendum nibh. Aliquam augue mauris, ullamcorper
        convallis orci vitae, tincidunt commodo tellus. In suscipit lorem leo, ac varius nibh maximus a. In suscipit quis nibh sed dictum.
        Etiam feugiat, justo id sodales laoreet, turpis lacus mollis augue, id lacinia odio turpis eget justo. In sed erat libero. Donec
        cursus eget felis quis euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc
        ullamcorper quam sed tortor pharetra tincidunt. Nam magna nibh, bibendum ut porta ac, lacinia ut mauris.
        <br />
        <br />
        Maecenas venenatis lacus vitae odio maximus auctor. Ut pulvinar tortor tellus, finibus eleifend diam bibendum sit amet. Integer ac
        luctus justo. Morbi erat mauris, pharetra nec dui non, mattis tincidunt turpis. Etiam tempus velit a dui bibendum fringilla. Vivamus
        tristique, massa in tempor aliquet, nisi diam venenatis sapien, ut tristique elit orci et ex. Aenean euismod mauris magna, vel
        dapibus diam scelerisque sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dapibus
        vitae tortor vel dapibus. Vestibulum facilisis iaculis fringilla.
        <br />
        <br />
        Quisque volutpat venenatis tortor, et iaculis nibh varius congue. Mauris imperdiet massa imperdiet, convallis elit a, euismod ante.
        Integer sit amet malesuada ex. Proin in augue faucibus, feugiat sapien suscipit, suscipit arcu. In hac habitasse platea dictumst.
        Mauris lobortis, sem non pellentesque pulvinar, augue est congue lectus, nec commodo sapien augue ac ex. Morbi consectetur erat
        vehicula tellus vehicula pretium vitae eu ex. Suspendisse aliquam mauris efficitur est dignissim, vel feugiat arcu rutrum.
      </Typography>
    </Paper>
  );
}
