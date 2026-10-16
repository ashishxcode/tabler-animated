"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8.6 8.6l10.4 10.4"}],["path",{"d":"M8.6 15.4l10.4 -10.4"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[11,20],"a":-16}];

export const ScissorsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScissorsIcon.displayName = "ScissorsIcon";
