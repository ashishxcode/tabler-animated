"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17h4v4h-4l0 -4"}],["path",{"d":"M10 17h4v4h-4l0 -4"}],["path",{"d":"M17 17h4v4h-4l0 -4"}],["path",{"d":"M17 10h4v4h-4l0 -4"}],["path",{"d":"M17 3h4v4h-4l0 -4"}],["path",{"d":"M10 10h4v4h-4l0 -4"}],["path",{"d":"M10 3h4v4h-4l0 -4"}],["path",{"d":"M3 3h4v4h-4l0 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":0.1}];

export const BrandPnpmIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandPnpmIcon.displayName = "BrandPnpmIcon";
