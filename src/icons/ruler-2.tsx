"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 3l4 4l-14 14l-4 -4l14 -14"}],["path",{"d":"M16 7l-1.5 -1.5"}],["path",{"d":"M13 10l-1.5 -1.5"}],["path",{"d":"M10 13l-1.5 -1.5"}],["path",{"d":"M7 16l-1.5 -1.5"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4],"o":[12,21],"a":-16}];

export const Ruler2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Ruler2Icon.displayName = "Ruler2Icon";
