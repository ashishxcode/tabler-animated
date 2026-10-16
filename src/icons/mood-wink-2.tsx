"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}],["path",{"d":"M9 10h-.01"}],["path",{"d":"M14.5 15a3.5 3.5 0 0 1 -5 0"}],["path",{"d":"M15.5 8.5l-1.5 1.5l1.5 1.5"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[12,15.53],[14.75,10]]}];

export const MoodWink2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodWink2Icon.displayName = "MoodWink2Icon";
