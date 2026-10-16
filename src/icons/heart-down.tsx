"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.907 6.12"}],["path",{"d":"M19 16v6"}],["path",{"d":"M22 19l-3 3l-3 -3"}]];
const rig: Rig[] = [{"fx":"beat","n":[0,1,2],"o":[12.49,12.99]}];

export const HeartDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HeartDownIcon.displayName = "HeartDownIcon";
