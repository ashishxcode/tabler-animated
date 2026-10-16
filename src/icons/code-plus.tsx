"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12h6"}],["path",{"d":"M12 9v6"}],["path",{"d":"M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"}],["path",{"d":"M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"}]];
const rig: Rig[] = [{"fx":"nudge","n":[2],"o":[4.5,12],"d":[-1.8,0]},{"fx":"nudge","n":[0,1,3],"o":[15,12],"d":[1.8,0]}];

export const CodePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodePlusIcon.displayName = "CodePlusIcon";
