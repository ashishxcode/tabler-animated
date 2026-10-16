"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0"}],["path",{"d":"M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.25],"a":0.1}];

export const BrandHtml5Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandHtml5Icon.displayName = "BrandHtml5Icon";
