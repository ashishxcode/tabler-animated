"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 6a7.75 7.75 0 1 0 10 0"}],["path",{"d":"M12 4l0 8"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1],"o":[12,11.84]}];

export const PowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PowerIcon.displayName = "PowerIcon";
