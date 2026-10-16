"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.296 14.297l6.407 6.407a9.018 9.018 0 0 1 -6.325 -6.116l-.082 -.291"}],["path",{"d":"M16 13h5c-.41 3.603 -3.007 6.59 -6.386 7.614l-11.228 -11.229a9 9 0 0 1 15.66 -2.985"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.15,11.85],"a":0.1}];

export const BrandGatsbyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGatsbyIcon.displayName = "BrandGatsbyIcon";
