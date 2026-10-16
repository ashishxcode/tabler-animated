"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9l6 0"}],["path",{"d":"M4 5l4 0"}],["path",{"d":"M6 5v11a1 1 0 0 0 1 1h5"}],["path",{"d":"M12 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M12 16a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[9,11],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,9],[6,5],[16,9],[16,17]]}];

export const SubtaskIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SubtaskIcon.displayName = "SubtaskIcon";
