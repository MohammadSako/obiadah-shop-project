"use client";
import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

export function ItemType({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Item Type</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select the Item Type" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="product">Product</SelectItem>
          <SelectItem value="discounted">Discounted</SelectItem>
          <SelectItem value="bestsellers">Bestseller</SelectItem>
          <SelectItem value="newarrival">New Arrival</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function ProductGender({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Product Gender</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select the product gender" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="men">Men</SelectItem>
          <SelectItem value="women">Women</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function ProductType({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Product Type</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select the product type" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="top">Top Clothes</SelectItem>
          <SelectItem value="lower">Lower Clothes</SelectItem>
          <SelectItem value="shoes">Shoes</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}

// Categories /////////////////////////////////

export function MenTopClothes({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Men Top</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select men product category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="1">T Shirt</SelectItem>
          <SelectItem value="3">Shirt</SelectItem>
          <SelectItem value="5">Wool Blouse</SelectItem>
          <SelectItem value="7">Hat</SelectItem>
          <SelectItem value="9">Watch</SelectItem>
          <SelectItem value="11">Bag</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function WomenTopClothes({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Women Top</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select women product category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="2">T Shirt</SelectItem>
          <SelectItem value="4">Shirt</SelectItem>
          <SelectItem value="6">Wool Blouse</SelectItem>
          <SelectItem value="8">Hat</SelectItem>
          <SelectItem value="10">Watch</SelectItem>
          <SelectItem value="12">Bag</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function MenLowerClothes({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Men Lower</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select men product category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="13">Jeans</SelectItem>
          <SelectItem value="15">Pants</SelectItem>
          <SelectItem value="17">Socks</SelectItem>
          <SelectItem value="19">Belt</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function WomenLowerClothes({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Women Lower</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select women product category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="14">Jeans</SelectItem>
          <SelectItem value="16">Pants</SelectItem>
          <SelectItem value="18">Socks</SelectItem>
          <SelectItem value="20">Belt</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function MenShoes({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Men Shoes</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select men shoes category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="21">Work & Safty Shoes</SelectItem>
          <SelectItem value="22">Loafers & Slip-Ons</SelectItem>
          <SelectItem value="24">Snow Boots</SelectItem>
          <SelectItem value="26">Casual Shoes</SelectItem>
          <SelectItem value="27">Boots</SelectItem>
          <SelectItem value="28">Sandals</SelectItem>
          <SelectItem value="29">Others</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function WomenShoes({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Women Shoes</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select women shoes category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="23">Loafers & Slip-Ons</SelectItem>
          <SelectItem value="25">Snow Boots</SelectItem>
          <SelectItem value="31">Flats</SelectItem>
          <SelectItem value="32">Slippers</SelectItem>
          <SelectItem value="33">Sneakers</SelectItem>
          <SelectItem value="30">Others</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}

// Sizes ////////////////////////////////////////////

export function WatcheSize({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Hand watch size</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select hand watch size" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="22mm">22 mm</SelectItem>
          <SelectItem value="24mm">24 mm</SelectItem>
          <SelectItem value="26mm">26 mm</SelectItem>
          <SelectItem value="28mm">28 mm</SelectItem>
          <SelectItem value="30mm">30 mm</SelectItem>
          <SelectItem value="32mm">32 mm</SelectItem>
          <SelectItem value="34mm">34 mm</SelectItem>
          <SelectItem value="36mm">36 mm</SelectItem>
          <SelectItem value="38mm">38 mm</SelectItem>
          <SelectItem value="40mm">40 mm</SelectItem>
          <SelectItem value="42mm">42 mm</SelectItem>
          <SelectItem value="45mm">46 mm</SelectItem>
          <SelectItem value="50mm">50 mm</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function ShoesSize({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Shoe size</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select hand watch size" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="34.5">34.5</SelectItem>
          <SelectItem value="35">35</SelectItem>
          <SelectItem value="35.5">35.5</SelectItem>
          <SelectItem value="36">36</SelectItem>
          <SelectItem value="36.5">36.5</SelectItem>
          <SelectItem value="37">37</SelectItem>
          <SelectItem value="37.5">37.5</SelectItem>
          <SelectItem value="38">38</SelectItem>
          <SelectItem value="38.5">38.5</SelectItem>
          <SelectItem value="39">39</SelectItem>
          <SelectItem value="39.5">39.5</SelectItem>
          <SelectItem value="40">40</SelectItem>
          <SelectItem value="40.5">40.5</SelectItem>
          <SelectItem value="41">41</SelectItem>
          <SelectItem value="41.5">41.5</SelectItem>
          <SelectItem value="42">42</SelectItem>
          <SelectItem value="42.5">42.5</SelectItem>
          <SelectItem value="43">43</SelectItem>
          <SelectItem value="43.5">43.5</SelectItem>
          <SelectItem value="44">44</SelectItem>
          <SelectItem value="44.5">44.5</SelectItem>
          <SelectItem value="45">45</SelectItem>
          <SelectItem value="45.5">45.5</SelectItem>
          <SelectItem value="46">46</SelectItem>
          <SelectItem value="46.5">46.5</SelectItem>
          <SelectItem value="47">47</SelectItem>
          <SelectItem value="47.5">47.5</SelectItem>
          <SelectItem value="48">48</SelectItem>
          <SelectItem value="48.5">48.5</SelectItem>
          <SelectItem value="49">49</SelectItem>
          <SelectItem value="49.5">49.5</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="50.5">50.5</SelectItem>
          <SelectItem value="51">51</SelectItem>
          <SelectItem value="51.5">51.5</SelectItem>
          <SelectItem value="52">52</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function ProductSize({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Product Size</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select the product size" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="3xl">3XL</SelectItem>
          <SelectItem value="2XL">2XL</SelectItem>
          <SelectItem value="XL">XL</SelectItem>
          <SelectItem value="L">L</SelectItem>
          <SelectItem value="M">M</SelectItem>
          <SelectItem value="S">S</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function PantsSize({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Pants Size</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select pants size" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="24">24</SelectItem>
          <SelectItem value="26">26</SelectItem>
          <SelectItem value="28">28</SelectItem>
          <SelectItem value="30">30</SelectItem>
          <SelectItem value="32">32</SelectItem>
          <SelectItem value="34">34</SelectItem>
          <SelectItem value="36">36</SelectItem>
          <SelectItem value="38">38</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
export function BagTypes({ onValueChange, defaultValue }) {
  return (
    <FormItem>
      <FormLabel>Bag Type</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select bag type" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="luggage">Luggage</SelectItem>
          <SelectItem value="handbag">handbags</SelectItem>
          <SelectItem value="tote">Tote bags</SelectItem>
          <SelectItem value="shoulder">Shoulder bags</SelectItem>
          <SelectItem value="crossbody">Crossbody bags</SelectItem>
          <SelectItem value="wallet">Wallets</SelectItem>
          <SelectItem value="backpack">Backpacks</SelectItem>
          <SelectItem value="bookbag">Bookbags</SelectItem>
          <SelectItem value="chest">Chest bags</SelectItem>
          <SelectItem value="clutche">Clutches</SelectItem>
          <SelectItem value="umbrella">Umbrellas</SelectItem>
          <SelectItem value="storage">Storage Bag</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
