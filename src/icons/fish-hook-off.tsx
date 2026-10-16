"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 9v3m-.085 3.924a5 5 0 0 1 -9.915 -.924v-4l3 3"}],["path",{"d":"M14 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 5v-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,14.5],[16,7],[16,4]]}];

export const FishHookOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FishHookOffIcon.displayName = "FishHookOffIcon";
