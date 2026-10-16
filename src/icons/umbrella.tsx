"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12a8 8 0 0 1 16 0l-16 0"}],["path",{"d":"M12 12v6a2 2 0 0 0 4 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1],"o":[12,5],"a":-8}];

export const UmbrellaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UmbrellaIcon.displayName = "UmbrellaIcon";
