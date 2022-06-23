import React from "react";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;
export const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo restaurant={restaurant} />
);