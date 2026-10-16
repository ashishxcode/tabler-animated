"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M12 21.5v-3.75"}],["path",{"d":"M5.916 9.49l-.43 1.604c-.712 2.659 .866 5.392 3.524 6.104c.997 .268 1.994 .535 2.99 .802v-3.44c-.164 -2.105 -1.637 -3.879 -3.677 -4.426l-2.407 -.644"}],["path",{"d":"M10.249 4.251c.007 -.007 .014 -.014 .021 -.021l1.73 -1.73"}],["path",{"d":"M10.27 11.15c-.589 -.589 -1.017 -1.318 -1.246 -2.118"}],["path",{"d":"M14.988 8.988c.229 -.834 .234 -1.713 .013 -2.549c-.221 -.836 -.659 -1.598 -1.271 -2.209l-1.73 -1.73"}],["path",{"d":"M16.038 10.037l2.046 -.547l.431 1.604c.142 .53 .193 1.063 .162 1.583"}],["path",{"d":"M16.506 16.505c-.45 .307 -.959 .544 -1.516 .694c-.997 .268 -1.994 .535 -2.99 .801v-3.44c.055 -.708 .259 -1.379 .582 -1.978"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"pop","n":[7],"o":[14.25,15.29],"a":0.35,"dl":0.2},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19.63],[8.66,13.75],[11.12,3.38],[9.65,10.09],[13.58,5.74],[17.36,11.08]]}];

export const WheatOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WheatOffIcon.displayName = "WheatOffIcon";
