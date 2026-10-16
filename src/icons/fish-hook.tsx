"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 9v6a5 5 0 0 1 -10 0v-4l3 3"}],["path",{"d":"M14 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 5v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11,14.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,7],[16,4]]}];

export const FishHookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FishHookIcon.displayName = "FishHookIcon";
