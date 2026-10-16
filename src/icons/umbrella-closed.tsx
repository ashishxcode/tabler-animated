"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 16l3 -13l3 13l-6 0"}],["path",{"d":"M12 16v3c0 2.667 4 2.667 4 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1],"o":[12.5,4],"a":-8}];

export const UmbrellaClosedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UmbrellaClosedIcon.displayName = "UmbrellaClosedIcon";
