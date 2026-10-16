"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5"}],["path",{"d":"M5 10a7 7 0 0 0 14 0"}],["path",{"d":"M8 21l8 0"}],["path",{"d":"M12 17l0 4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,11.5],"d":[0,-2]}];

export const MicrophoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MicrophoneIcon.displayName = "MicrophoneIcon";
