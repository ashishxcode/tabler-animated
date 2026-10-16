"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4l-4.5 0"}],["path",{"d":"M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4l-4.5 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.25,12],"a":0.1}];

export const BrandInertiaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandInertiaIcon.displayName = "BrandInertiaIcon";
