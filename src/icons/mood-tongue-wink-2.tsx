"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}],["path",{"d":"M15 10h-.01"}],["path",{"d":"M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7"}],["path",{"d":"M7 10c.5 -1 2.5 -1 3 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1],"o":[12,12],"a":-5},{"fx":"pop","n":[2,3,4],"a":0.3,"dl":0.12,"st":0.07,"os":[[15,10],[12,16],[8.5,9.63]]}];

export const MoodTongueWink2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodTongueWink2Icon.displayName = "MoodTongueWink2Icon";
