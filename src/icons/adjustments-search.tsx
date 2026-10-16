"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 4v4"}],["path",{"d":"M6 12v8"}],["path",{"d":"M12 14a2 2 0 0 0 -1.042 3.707"}],["path",{"d":"M12 4v10"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v2"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M20.2 20.2l1.8 1.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[9],"o":[21.1,21.1],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1,2,3,4,5,6,7,8],"o":[12.5,12.5]}];

export const AdjustmentsSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsSearchIcon.displayName = "AdjustmentsSearchIcon";
