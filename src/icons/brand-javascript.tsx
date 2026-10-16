"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0"}],["path",{"d":"M7.5 8h3v8l-2 -1"}],["path",{"d":"M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.25],"a":0.1}];

export const BrandJavascriptIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandJavascriptIcon.displayName = "BrandJavascriptIcon";
