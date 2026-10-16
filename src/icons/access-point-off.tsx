"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M14.828 9.172a4 4 0 0 1 1.172 2.828"}],["path",{"d":"M17.657 6.343a8 8 0 0 1 1.635 8.952"}],["path",{"d":"M9.168 14.828a4 4 0 0 1 0 -5.656"}],["path",{"d":"M6.337 17.657a8 8 0 0 1 0 -11.314"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.41,10.59],[18.83,10.82],[8.58,12],[5.17,12]]}];

export const AccessPointOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AccessPointOffIcon.displayName = "AccessPointOffIcon";
