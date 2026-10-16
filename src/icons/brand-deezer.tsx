"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16.5h2v.5h-2l0 -.5"}],["path",{"d":"M8 16.5h2.5v.5h-2.5l0 -.5"}],["path",{"d":"M16 17h-2.5v-.5h2.5l0 .5"}],["path",{"d":"M21.5 17h-2.5v-.5h2.5l0 .5"}],["path",{"d":"M21.5 13h-2.5v.5h2.5l0 -.5"}],["path",{"d":"M21.5 9.5h-2.5v.5h2.5l0 -.5"}],["path",{"d":"M21.5 6h-2.5v.5h2.5l0 -.5"}],["path",{"d":"M16 13h-2.5v.5h2.5l0 -.5"}],["path",{"d":"M8 13.5h2.5v-.5h-2.5l0 .5"}],["path",{"d":"M8 9.5h2.5v.5h-2.5l0 -.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9],"o":[12.25,11.5],"a":0.1}];

export const BrandDeezerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDeezerIcon.displayName = "BrandDeezerIcon";
