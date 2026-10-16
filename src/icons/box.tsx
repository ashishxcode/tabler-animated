"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"}],["path",{"d":"M12 12l8 -4.5"}],["path",{"d":"M12 12l0 9"}],["path",{"d":"M12 12l-8 -4.5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,21],"d":[0,-1.5]}];

export const BoxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxIcon.displayName = "BoxIcon";
