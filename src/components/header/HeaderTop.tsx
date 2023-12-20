"use client";
import React from "react";
import { SearchControl } from "../common/SearchControl";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { Col, Row } from "antd";
import Link from "next/link";
import ButtonSecondary from "../common/ButtonSecondary";

const HeaderTop = () => {
  const { control, watch } = useForm({
    defaultValues: {
      name: "",
    },
  });
  return (
    <div className="border-b pb-4">
      <div className="content-container">
        <Row gutter={60}>
          <Col span={12} className="flex items-center justify-between ">
            <div className="text-4xl font-black text-site-primary cursor-pointer transition-all  hover:scale-110">
              <h1>NFTERS</h1>
            </div>
            {menuItem.map((item) => (
              <div key={item.key} className="relative group hover:after">
                <Link href={"#"}>
                  <span className="text-xl font-bold hover:text-site-primary transition-all ">
                    {item.title}
                  </span>
                </Link>
              </div>
            ))}
          </Col>

          <Col span={12} className="flex items-center justify-between">
            <SearchControl
              className="rounded-3xl"
              control={control}
              name="name"
              placeholder="Search"
              suffix={
                <span className="text-2xl">
                  <BiSearch />
                </span>
              }
            />

            <ButtonSecondary title="Upload" />
            <div className="button-primary">About</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeaderTop;

const menuItem = [
  {
    title: "Marketplace",
    key: "marketplace",
    link: "#",
  },
  {
    title: "Resource",
    key: "resource",
    link: "#",
  },
  {
    title: "About",
    key: "about",
    link: "#",
  },
];
